import { domControllers } from "./domControllers";
import { handlers } from "./handlers";
import { projectsModule } from "./projectModuleFunctions";

domControllers.updateNavTabs();
const activeProject = projectsModule.getActiveProject();
domControllers.showProjectView(activeProject.getTasks());

handlers.addNewProjectButtonHandlers();
