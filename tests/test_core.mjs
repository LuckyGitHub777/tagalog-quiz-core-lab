// Fictional vocabulary only; no licensed course catalog or learner records.
import assert from 'node:assert/strict';
import test from 'node:test';
import {normalizeText,makeQuiz,defaultProgress,scheduleReview} from '../assets/js/core.js';
test('normalization and small sample vocabulary',()=>{
 assert.equal(normalizeText('Taga-saan ka?'),'taga saan ka');
 const v=[{id:'a',practice:true,tagalog:'Isa',english:'One'},
          {id:'b',practice:true,tagalog:'Dalawa',english:'Two'}];
 const q=makeQuiz(v,2,()=>0.5);
 assert.equal(q.length,2);
 for(const item of q)assert.ok(item.answer>=0&&item.answer<item.choices.length);
 assert.deepEqual(defaultProgress().familiar,[]);
 assert.ok(scheduleReview({},'again',Date.UTC(2026,0,1)).due);
});
