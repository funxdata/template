import { chattpl } from "./chat/index.ts";
import { app_tpl } from "./app/index.ts";
import { material_tpl } from "./material/index.ts";
import { project_tpl } from "./project/index.ts";
import { workspace_tpl } from "./workspace/index.ts";
import { setting_tpl } from "./setting/index.ts";
import { docs_tpl } from "./docs/index.ts";

export {
  chattpl,
  app_tpl,
  material_tpl,
  project_tpl,
  workspace_tpl,
  setting_tpl,
  docs_tpl,
};

export type { AppShellData } from "./app/index.ts";
export type { MaterialPageData } from "./material/index.ts";
export type { ProjectPageData } from "./project/index.ts";
export type { WorkspacePageData } from "./workspace/index.ts";
export type { SettingPageData } from "./setting/index.ts";
export type { DocsPageData, DocItem, DocSection } from "./docs/index.ts";
