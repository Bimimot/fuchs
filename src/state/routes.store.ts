import { ref } from "vue";
import { defineStore } from 'pinia';
import { Nullable } from "types";
import { RoutesIds } from "constants/routes";

export const useRoutes = defineStore('routes', () => {
    const activeRouteId = ref<Nullable<RoutesIds>>();



    function setActiveRouteId(id: RoutesIds) {
        activeRouteId.value = id;
    }

    function resetActiveRouteId() {
        activeRouteId.value = null;
    }

    return {
        setActiveRouteId,
        resetActiveRouteId,
        activeRouteId
    }

})

