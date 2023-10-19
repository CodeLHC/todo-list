import { domControllers } from "./domControllers";
import { handlers } from "./handlers";
import { projectsModule } from "./projectListFunctions";

domControllers.updateNavTabs();
const activeProject = projectsModule.getActiveProject();
domControllers.showProjectView(activeProject.list);

handlers.addNewProjectButtonHandlers();
