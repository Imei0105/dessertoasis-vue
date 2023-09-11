import { ref } from "vue"
import { defineStore } from "pinia"
import { reqGetOrderPage, reqGetCmsOrderPages, reqGetRecipePage, reqGetCmsRecipePages, reqGetFrontRecipePages } from "../api"

export const useSortCondition = defineStore('sortCondition', () => {
    //定義state
    const condition = ref({
        sortWay: null,
        sortBy: null,
        page: 1,
        pageSize: 10,
        dateRules: [],
        searchRules: [],
        numKey: null,
        numStart: 0,
        numEnd: 0
    })

    //填入資料方法
    /*------------------------訂單--------------------------------*/

    const setSearchRules = async (rules) => {
        condition.value.searchRules = rules
        console.log(rules);
        return await getOrderPagenation()
    }

    const setDateRules = async (rules) => {
        condition.value.dateRules = rules
        console.log(rules);
        return await getOrderPagenation()
    }

    const setNumberRange = async (range) => {
        condition.value.numKey = null
        condition.value.numStart = 0
        condition.value.numEnd = 0
        if (range !== null) {
            condition.value.numKey = range[0]
            condition.value.numStart = range[1]
            condition.value.numEnd = range[2]
            console.log(range);
            return await getOrderPagenation()
        }
    }

    const setSortBy = async (rule) => {
        condition.value.sortBy = rule[0]
        condition.value.sortWay = rule[1]
        console.log(rule);
        return await getOrderPagenation()
    }

    //更新頁碼
    const setPageChange = async (newPage) => {
        condition.value.page = newPage[0]
        condition.value.pageSize = newPage[1]
        console.log(newPage)
        return await getOrderPagenation()
    }

    /*------------------------食譜  後台--------------------------------*/
    const setRecipeSearchRules = async (rules) => {
        condition.value.searchRules = rules
        console.log(condition.value);
        return await getRecipePagenation()
    }

    const setRecipeDateRules = async (rules) => {
        condition.value.dateRules = rules
        console.log(condition.value);
        return await getRecipePagenation()
    }

    const setRecipeNumberRange = async (range) => {
        condition.value.numKey = null
        condition.value.numStart = 0
        condition.value.numEnd = 0
        if (range !== null) {
            condition.value.numKey = range[0]
            condition.value.numStart = range[1]
            condition.value.numEnd = range[2]
            console.log(condition.value);
            return await getRecipePagenation()
        }
    }

    const setRecipeSortBy = async (rule) => {
        condition.value.sortBy = rule[0]
        condition.value.sortWay = rule[1]
        console.log(condition.value);
        return await getRecipePagenation()
    }

    //更新後台頁碼
    const setRecipePageChange = async (newPage) => {
        condition.value.page = newPage[0]
        condition.value.pageSize = newPage[1]
        console.log(condition.value)
        return await getRecipePagenation()
    }
    /*------------------------食譜  前台--------------------------------*/

    const setFrontRecipePageChange = async (newPage) => {
        condition.value.page = newPage[0]
        condition.value.pageSize = newPage[1]
        console.log(condition.value)
        return await getFrontRecipePagenation()
    }

    const setFrontRecipeSortBy = async (rule) => {
        condition.value.sortBy = rule[0]
        condition.value.sortWay = rule[1]
        console.log(condition.value);
        return await getFrontRecipePagenation()
    }

    const setFrontRecipeNumberRange = async (range) => {
        condition.value.numKey = null
        condition.value.numStart = 0
        condition.value.numEnd = 0
        if (range !== null) {
            condition.value.numKey = range[0]
            condition.value.numStart = range[1]
            condition.value.numEnd = range[2]
            console.log(condition.value);
            return await getFrontRecipePagenation()
        }
    }


    //分頁搜索
    /*------------------------訂單--------------------------------*/
    //查詢訂單頁面
    const getOrderPagenation = async () => {
        let result = await reqGetOrderPage(condition.value)
        console.log(result.data);
        return result
    }
    //查詢訂單頁數
    const getOrderPages = async () => {
        return await reqGetCmsOrderPages(condition.value)
    }

    /*------------------------食譜--------------------------------*/
    const getRecipePagenation = async () => {
        let result = await reqGetRecipePage(condition.value)
        console.log(result.data);
        return result
    }
    //查詢食譜頁數
    const getRecipePages = async () => {
        return await reqGetCmsRecipePages(condition.value)
    }

    const getFrontRecipePagenation = async () => {
        let result = await reqGetFrontRecipePages(condition.value)
        console.log(result.data);
        return result
    }

    return {
        //搜索條件
        condition,
        // 條件設置方法
        setPageChange, setSearchRules, setSortBy, setNumberRange, setDateRules,
        // 食譜條件設置
        setRecipeSearchRules, setRecipeDateRules, setRecipeNumberRange, setRecipeSortBy, setRecipePageChange, setFrontRecipePageChange, setFrontRecipeSortBy, setFrontRecipeNumberRange,
        //cms order 分頁方法
        getOrderPagenation, getOrderPages,
        //cms recipe 分頁方法
        getRecipePagenation, getRecipePages, getFrontRecipePagenation
    }
})
