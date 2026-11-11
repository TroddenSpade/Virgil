import { chapters, book } from '../src/data/exercitia-latina-ii/index.js'
const problems=[]
const stats={chapters:0,pensa:0,items:0,blanks:0,openBlanks:0,words:0,extras:0}
const words=(t)=>(String(t).match(/[A-Za-zÀ-ÿĀ-ſ]+/g)||[]).length
function check(w,t){if(typeof t!=='string'){problems.push(`${w}: not a string`);return}if(/[\t\u0000\u001f\u00ad]/.test(t))problems.push(`${w}: control char`);stats.words+=words(t)}
if(chapters.length!==21)problems.push(`expected 21 chapters, found ${chapters.length}`)
for(const ch of chapters){
  stats.chapters++
  if(!ch.pensa?.length)problems.push(`${ch.roman}: no pensa`)
  for(const p of ch.pensa||[]){
    stats.pensa++
    if(!p.items?.length)problems.push(`${ch.roman}/${p.id}: no items`)
    check(`${ch.roman}/${p.id}`,p.latinLabel||'')
    check(`${ch.roman}/${p.id}`,p.instruction||'')
    for(const [i,item] of (p.items||[]).entries()){
      stats.items++
      check(`${ch.roman}/${p.id}/i${i}`,item)
      const found=[...item.matchAll(/\{\{([^}]*)\}\}/g)]
      stats.blanks+=found.length
      stats.openBlanks+=found.filter(m=>!m[1].trim()||m[1].trim()==='?').length
      if(!found.length)problems.push(`${ch.roman}/${p.id}/i${i}: no blank`)
    }
  }
}
for(const ex of book.extras||[]){stats.extras++;if(!ex.sections?.length)problems.push(`extra ${ex.id}: no sections`)}
console.log(stats)
if(problems.length){console.log(`\n${problems.length} problem(s):`);for(const p of problems.slice(0,60))console.log(' -',p);process.exitCode=1}else console.log('\n0 problem(s)')
