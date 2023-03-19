//像这种就是模块化的思想，获取数据呀，新增修改删除数据呀，如果都放在一起写会让组件里的内容十分冗杂，
//如果把他们做成一块块的模块，哪里需要也是只需要调用就可以了，可以使主要组件里的代码变得十分简洁
//例如如果要做增上删改查，全部写在一个组件代码会不太好读，但如果把这些功能模块化，那么某些组件要用可以借直接调用就会非常方便美观
//获取表格的数据
export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
            }
        })
        .catch(err => {
            throw err
        })
}
//新增和修改方法的封装
import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                callback(root, url)
                root.dialogFormVisible = false
                root.$refs['form'].resetFields()
                root.$message({ type: 'success', message: res.data.message })
            }
        })
        .catch(err => {
            throw err
        })
}

//删除方法封装
export function delData(root, url, id, callback) {
    root.$alert('确定删除崽种？', '提示', {
        confirmButtonText: '确定',
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res => {
                if (res.data.status === 200) {
                    callback(root, url)
                    root.$message({ type: 'success', message: res.data.message })
                }
            })
            .catch(err => {
                throw err
            })
        }
    })

}
//作业列表获取表格数据方法封装
export function getTableData(root, url,params,arr){ //这里放一个数组是因为以后可能转换的东西很多，比如把性别1/2转化为男/女或者别的，所以给一个数组，然后遍历这个数组来转换数据
   
    root.service.get(url,{params:params || {}})
    .then(res=>{
        if(res.data.status===200){
            root.tableData=res.data.data
            root.total=res.data.total
            root.tableData.map(item=>{
                arr.map(aItem=>[
                    item[aItem] ? item[aItem+'_text']='是':item[aItem+'_text']='否'
                ])
            })
            root.loading=false
        }
    })
    .catch(err=>{
        throw err
    })
}


