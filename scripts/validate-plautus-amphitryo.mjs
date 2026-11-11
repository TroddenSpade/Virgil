import { chapters, book } from '../src/data/plautus-amphitryo/index.js'
const problems=[];const stats={chapters:0,readings:0,paragraphs:0,words:0,extras:0}
const words=(t)=>(String(t).match(/[A-Za-zÀ-ÿĀ-ſ]+/g)||[]).length
function check(w,t){if(typeof t!=='string'){problems.push(`${w}: not a string`);return}if(/[\t\u0000\u001f\u00ad]/.test(t))problems.push(`${w}: control char`);stats.words+=words(t)}
if(chapters.length!==6)problems.push(`expected 6 chapters, found ${chapters.length}`)
for(const ch of chapters){stats.chapters++;if(!ch.readings?.length)problems.push(`${ch.roman}: no readings`);for(const r of ch.readings||[]){stats.readings++;if(!r.paragraphs?.length)problems.push(`${ch.roman}/${r.id}: no paragraphs`);for(const [i,p] of (r.paragraphs||[]).entries()){stats.paragraphs++;check(`${ch.roman}/${r.id}/p${i}`,p);if(!p.trim())problems.push(`${ch.roman}/${r.id}: empty paragraph`)}}}
for(const ex of book.extras||[]){stats.extras++;for(const sec of ex.sections||[]){for(const b of sec.blocks||[]){if(b.t==='p'||b.t==='h')check(`extra ${ex.id}`,b.text);if(b.t==='pre'&&/[\u0000\u001f\u00ad]/.test(b.text||''))problems.push(`extra ${ex.id}: control char in pre`)}}}
console.log(stats);if(problems.length){console.log(`\n${problems.length} problem(s):`);for(const p of problems.slice(0,50))console.log(' -',p);process.exitCode=1}else console.log('\n0 problem(s)')
