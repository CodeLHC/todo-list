(()=>{"use strict";class e{constructor(e){this.name=e,this.list=["hello "+e]}addTask(e){this.list.push(e)}removeTask(){}}const t=(()=>{let t=[new e("All my Tasks"),new e("same")];return{makeNewProject:o=>{const n=new e(o);t.push(n)},removeProject:e=>{const o=t.find((t=>t.name===e));t=t.filter((e=>o!==e))},getProjects:()=>[...t]}})(),o=(()=>{const e=document.getElementById("content");return{addNewTask:()=>{},updateNavTabs:()=>{for(let e=0;e<t.getProjects.length;e++){const t=document.createElement("li");t.classList.add("projectTab"),t.innerText=listOfProjects[e].name,projectTabs.appendChild(t)}},removeAllChildNodes:e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},projectTabContainer:document.getElementById("projectTabs"),showProjectList:t=>{t.forEach((t=>{const o=document.createElement("div");o.innerText=t,e.appendChild(o)}))},content:e}})(),n=function(){const e=document.getElementById("projectDialog");document.getElementById("newProject").addEventListener("click",(()=>{e.showModal()}));const n=document.getElementById("projectSubmit"),s=document.getElementById("projectName");n.addEventListener("click",(n=>{const c=document.getElementById("newProjectForm");t.makeNewProject(s.value),o.removeAllChildNodes(o.projectTabContainer),o.updateNavTabs(),c.reset(),e.close(),n.preventDefault()})),document.querySelectorAll(".projectTab").forEach((e=>{e.addEventListener("click",(e=>{o.removeAllChildNodes(o.content);const t=((e,t)=>listOfProjects.findIndex((t=>t.name===e)))(e.target.innerText);o.showProjectList(listOfProjects[t].list)}))}))};console.log("hi Crawfs");const s=new class{constructor(e,t,o,n){this.title=e,this.description=t,this.dueDate=o,this.priority=n}isComplete(){console.log("complete function ran")}changePriority(){console.log("priority function ran")}}("Test this","test that its working desc","5th OCT","high");console.log(s),console.log(t.getProjects()),t.makeNewProject("1"),console.log(t.getProjects()),t.removeProject("1"),console.log(t.getProjects()),o.updateNavTabs(),n()})();