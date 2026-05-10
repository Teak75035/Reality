<script setup lang="ts">
import { motion } from 'framer-motion'

interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <motion.div
    class="p-4 bg-blue-500 text-white rounded-lg"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  >
    {{ text }}
  </motion.div>
</template>
