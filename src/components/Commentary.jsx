import { Fragment } from 'react'

/* Render the book's inline markup: {i}…{/i} italic, {b}…{/b} bold, {{n}} note. */
export function Inline({ text }) {
  if (text == null) return null
  const tokens = String(text).split(/(\{i\}|\{\/i\}|\{b\}|\{\/b\}|\{\{\d+\}\})/)
  let italic = 0
  let bold = 0
  const out = []
  let key = 0

  for (const token of tokens) {
    if (!token) continue
    if (token === '{i}') { italic += 1; continue }
    if (token === '{/i}') { italic = Math.max(0, italic - 1); continue }
    if (token === '{b}') { bold += 1; continue }
    if (token === '{/b}') { bold = Math.max(0, bold - 1); continue }
    const note = token.match(/^\{\{(\d+)\}\}$/)
    if (note) {
      out.push(
        <sup className="commentary__note-ref" key={`n${key++}`}>
          {note[1]}
        </sup>,
      )
      continue
    }
    let node = token
    if (italic) node = <em key={`i${key++}`}>{node}</em>
    if (bold) node = <strong key={`b${key++}`}>{node}</strong>
    out.push(<Fragment key={`t${key++}`}>{node}</Fragment>)
  }
  return <>{out}</>
}

function List({ items }) {
  const ordered = items.some((item) => item.ordered)
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="commentary__list">
      {items.map((item, i) => (
        <li key={i} className="commentary__li">
          {!ordered && item.marker !== '•' ? (
            <span className="commentary__marker">{item.marker}</span>
          ) : null}
          <Inline text={item.text} />
        </li>
      ))}
    </Tag>
  )
}

function Table({ rows }) {
  if (!rows?.length) return null
  const width = Math.max(...rows.map((row) => row.length))
  return (
    <div className="commentary__table-wrap">
      <table className="commentary__table">
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={c === 0 ? 'commentary__cell commentary__cell--latin' : 'commentary__cell'}
                  colSpan={row.length === 1 && width > 1 ? width : undefined}
                >
                  <Inline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* Render the blocks of one section of the Companion. */
export default function CommentarySection({ blocks }) {
  if (!blocks?.length) return null
  const out = []
  let list = null
  let key = 0

  const flush = () => {
    if (list) {
      out.push(<List items={list} key={`l${key++}`} />)
      list = null
    }
  }

  for (const block of blocks) {
    if (block.t === 'li') {
      if (!list) list = []
      list.push(block)
      continue
    }
    flush()
    if (block.t === 'outline') {
      out.push(
        <ol className="commentary__outline" key={`o${key++}`}>
          {block.items.map((item, i) => (
            <li
              key={i}
              className={`commentary__outline-item ${item.depth > 0 ? 'is-sub' : ''}`}
            >
              <span className="commentary__outline-marker" aria-hidden="true">
                {item.depth > 0 ? '·' : '◆'}
              </span>
              <Inline text={item.text} />
            </li>
          ))}
        </ol>,
      )
    } else if (block.t === 'h') {
      out.push(
        <h3 className="commentary__heading" key={`h${key++}`}>
          <Inline text={block.text} />
        </h3>,
      )
    } else if (block.t === 'table') {
      out.push(<Table rows={block.rows} key={`t${key++}`} />)
    } else if (block.t === 'pre') {
      out.push(
        <pre className="commentary__pre" key={`pre${key++}`}>
          {block.text}
        </pre>,
      )
    } else {
      out.push(
        <p className="commentary__p" key={`p${key++}`}>
          <Inline text={block.text} />
        </p>,
      )
    }
  }
  flush()
  return <div className="commentary">{out}</div>
}
