<template>
  <!--设置标签宽度-->
  <el-form :model="queryModel" :label-width="labelWidth">
    <el-row type="flex" style="padding: 10px;">
      <slot/>
      <el-form-item>
        <el-button
                id="queryBtn"
                v-loading="queryLoading"
                type="primary"
                icon="el-icon-search"
                @click="handleBtnQueryClick"
        >查询
        </el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>
<script>
export default {
  props: {
    queryModel: { type: Object, required: true },

    labelWidth: { type: String, default: '120px' }
  },
  data() {
    return {
      queryLoading: false
    }
  },
  methods: {
    handleBtnQueryClick() {
      this.queryLoading = true;
      this.$emit('QueryButtonClick');
      this.queryLoading = false
    }
  }
}
</script>

