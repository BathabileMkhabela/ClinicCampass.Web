import { create } from 'zustand'

const level1 = "Critical";
const level2 = "Old";
const level3 = "Neutral";
const useUrgencyLevelStore = create((set)=>({
    level: level3,
    changeUrgLvlToOld: ()=> set(({
       level: level2
    })),
    changeUrgLvlTCritical: ()=> set(({
        level: level1

    })),
    changeUrgLvlToNeutral: ()=> set(({
        level: level3
    })),
}))
export default useUrgencyLevelStore