/*********************************************************************************/
/**                                                                             **/
/**                         author:   fei                                       **/
/**                         date:     2017-10-27                                **/
/**                         describe：基于Bootstrap的一个分页器指令                **/
/**                         version:  1.0.0                                     **/
/**                                                                             **/
/*********************************************************************************/

1、引入Boostrap相关包
2、引入指令
3、在页面引用指令
        <fei-paging
            ng-if="pages.length>0"
            paging="pager"
            page-array="pages"
            local-pageno="pager.pageNum"
            go-page="search();">
        </fei-paging>
4、指令参数说明
        paging参数：   分页参数对象，包含页码pageNum、分页大小pageSize以及起始页码startPageNum(只有0或1)三个属性（为啥有这个么奇葩的起始页码startPageNum属性？遇到分页从第0页开始）
        page-array:   分页页码数组（[1,2,3,4,5...]）
        local-pageno: 当前页码
        go-page:      查询函数
5、外部函数search必须要使用setTimeout(function timeout(){}, 0)定时器包裹;
   外部函数search必须要使用setTimeout(function timeout(){}, 0)定时器包裹;
   外部函数search必须要使用setTimeout(function timeout(){}, 0)定时器包裹;