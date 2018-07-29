import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";
import BrowseParts from "../parts/BrowseParts.vue";
import RobotHeads from "../parts/RobotHeads.vue";
import RobotArms from "../parts/RobotArms.vue";
import RobotTorsos from "../parts/RobotTorsos.vue";
import RobotBases from "../parts/RobotBases.vue";
import SideBarStandard from "../sidebars/SideBarStandard.vue";
import SideBarBuild from "../sidebars/SideBarBuild.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: HomePage,
        sidebar: SideBarStandard
      }
    },
    {
      path: "/build",
      name: "Build",
      components: {
        default: RobotBuilder,
        sidebar: SideBarBuild
      }
    },
    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        {
          name: "BrowseHeads",
          path: "heads",
          component: RobotHeads
        },
        {
          name: "BrowseArms",
          path: "arms",
          component: RobotArms
        },
        {
          name: "BrowseTorsos",
          path: "torsos",
          component: RobotTorsos
        },
        {
          name: "BrowseBases",
          path: "bases",
          component: RobotBases
        }
      ]
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true
    }
  ]
});
