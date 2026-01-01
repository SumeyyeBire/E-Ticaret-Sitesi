<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="item-image" />
    <div class="item-details">
      <h4 class="item-name">{{ item.name }}</h4>
      <div class="quantity-control">
        <button @click="changeQuantity(-1)" :disabled="item.quantity <= 1">-</button>
        <input type="number" :value="item.quantity" min="1" readonly />
        <button @click="changeQuantity(1)">+</button>
      </div>
    </div>
    <div class="item-price">{{ (item.price * item.quantity).toFixed(2) }} TL</div>
    <button class="remove-btn" @click="$emit('removeItem', item.id)">X</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const props = defineProps<{
  item: CartItem;
}>();

const emits = defineEmits(['updateQuantity', 'removeItem']);

const changeQuantity = (delta: number) => {
  emits('updateQuantity', { id: props.item.id, quantity: props.item.quantity + delta });
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  gap: 15px;
}
.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.item-details {
  flex-grow: 1;
}
.item-name {
  font-size: 15px;
  margin-bottom: 5px;
}
.quantity-control {
  display: flex;
  align-items: center;
}
.quantity-control button {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.quantity-control input {
  width: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
  height: 24px;
}
.item-price {
  font-weight: bold;
  margin-left: auto;
}
.remove-btn {
  border: none;
  background: none;
  color: #999;
  cursor: pointer;
  font-weight: bold;
}
</style>