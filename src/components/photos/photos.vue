<template>
  <div class="photos" v-show="showFlag">
    <header>
      <span class="icon-back" @click="back()"></span>
      Photos
      <span class="save">Done</span>
    </header>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      multiple="true"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showFlag: false,
        dialogImageUrl: '',
        dialogVisible: false,
        addr: {
          type: Object
        }
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      back () {
        this.showFlag = false
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    }
  }
</script>
<style scoped>
  .photos {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 30;
    background-color: #fff;
  }
  header{
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-weight: 500;
    color:#666;
    font-size:16px;
    background: #fff;
    z-index: 500;
  }
  .icon-back {
    position: absolute;
    left: 10px;
    top: 12px;
  }
  .save{
    position: absolute;
    right: 10px;
    top: 0;
  }
  .name,.zipAndNum{
    display: flex;
  }
  .name span,.zipAndNum span{
    display: inline-block;
    padding:10px;
    flex: 1;

  }
  .name input,.zipAndNum input {
    width: 140px;
    height: 30px;
    outline:none;
    font-size:18px;
    border-bottom:1px solid #ccc;
  }
  ::-webkit-input-placeholder{
    font-weight: bold;

  }
</style>
