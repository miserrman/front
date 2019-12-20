<script>
export default {
  name: 'AuthRedirect',
  created() {
    // search是后面的Querying String，取第一项
    const hash = window.location.search.slice(1)
    // origin属性返回URL的协议，主机名和端口号。
    // 关闭子窗口同时刷新父窗口代码
    window.opener.location.href = window.location.origin + '/login#' + hash
    window.close()
  }
}
</script>
