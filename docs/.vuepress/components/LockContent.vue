<template>
  <div>
    <!-- 解锁按钮 -->
    <div v-if="!unlocked" class="lock-container">
      <button class="unlock-button" @click="showModal = true">
        <span class="lock-icon">🔒</span> 解锁阅读完整内容
      </button>
    </div>

    <!-- 弹窗 -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <p>扫描二维码解锁完整内容</p>
        <img src="/path/to/your/qrcode.png" alt="QR Code">
        <button @click="unlockContent">确认解锁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    unlockRatio: {
      type: Number,
      default: 0.2,
    },
  },
  data() {
    return {
      unlocked: false,
      showModal: false,
    };
  },
  methods: {
    unlockContent() {
      this.unlocked = true;
      this.showModal = false;
      // 渲染完整内容
      const contentElement = document.querySelector('.theme-default-content');
      if (contentElement) {
        contentElement.innerHTML = this.content;
      }
    },
  },
};
</script>

<style>
.lock-container {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.unlock-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unlock-button:hover {
  background-color: #0056b3;
}

.lock-icon {
  margin-right: 8px;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.close:hover {
  color: #000;
}
</style>