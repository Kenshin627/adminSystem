<template>
  <el-table
    stripe
    size="medium"
    :data="products"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="100">
    </el-table-column>
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="商品名称"
      sortable
      width="280">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="180">
    </el-table-column>
    <el-table-column
      prop="quantity"
      label="数量"
      width="280">
    </el-table-column>
  </el-table>

</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "product-list",
        computed:mapState({
          products:(state)=>state.products.all
        }),
        created:function(){
          this.$store.dispatch("products/getProducts",)
        }
    }
</script>

<style scoped>

</style>
