import { chapters, book } from '../src/data/companion-roma-aeterna/index.js'
const problems=[];const stats={chapters:0,sections:0,blocks:0,words:0,extras:0}
const words=(t)=>(String(t).match(/[A-Za-zÀ-ÿĀ-ſ]+/g)||[]).length
function check(w,t){if(typeof t!=='string'){problems.push(`${w}: not a string`);return}if(/[\t\u0000\u001f\u00ad]/.test(t))problems.push(`${w}: control char`);stats.words+=words(t)}
if(chapters.length!==21)problems.push(`expected 21 chapters, found ${chapters.length}`)
for(const ch of chapters){stats.chapters++;if(!ch.sections?.length)problems.push(`${ch.roman}: no sections`);for(const sec of ch.sections||[]){stats.sections++;if(!sec.blocks?.length)problems.push(`${ch.roman}/${sec.id}: no blocks`);for(const b of sec.blocks||[]){stats.blocks++;if(b.t==='p'||b.t==='h')check(`${ch.roman}/${sec.id}`,b.text);if(b.t==='table'){if(!b.rows?.length)problems.push(`${ch.roman}/${sec.id}: empty table`)}if(b.t==='pre'&&/[\u0000\u001f\u00ad]/.test(b.text||''))problems.push(`${ch.roman}/${sec.id}: control char in pre`)}}}
for(const ex of book.extras||[]){stats.extras++;for(const sec of ex.sections||[]){for(const b of sec.blocks||[]){if(b.t==='p'||b.t==='h')check(`extra ${ex.id}`,b.text);if(b.t==='pre'&&/[\u0000\u001f\u00ad]/.test(b.text||''))problems.push(`extra ${ex.id}: control char in pre`)}}}
console.log(stats);if(problems.length){console.log(`\n${problems.length} problem(s):`);for(const p of problems.slice(0,60))console.log(' -',p);process.exitCode=1}else console.log('\n0 problem(s)')
