import api_LogReg from "@/assets/api/api_LogReg";
import api_user from "@/assets/api/api_user";
import api_rbac from "@/assets/api/api_rbac";
import api_goods from "@/assets/api/api_goods";

export default {
    /**
     * 用户登录注册接口
     */
    logReg: api_LogReg,
    /**
     * 用户相关接口
     */
    user: api_user,
    /**
     * rbac 权限管理相关接口
     */
    rbac: api_rbac,
    /**
     * 图片相关接口
     */
    image: {
        // 上传图片 base64
        uploadBase64: ['/back/image/uploadBase64', 'post']
    },
    /**
     * 商品接口
     */
    goods: api_goods,

    /**
     * 合作方接口
     */
    company: {
        list : ['/company/list', 'get'],
        add : ['/company/add', 'post'],
        edit : ['/company/edit', 'post'],
        delete : ['/company/delete', 'post'],
        getById : ['/company/get_by_id', 'get'],
    }
}