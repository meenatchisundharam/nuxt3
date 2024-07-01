<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const { loading, open } = useHelpers();

const createNewProduct = async () => {
  try {
    loading.value = true

    // my call
  } catch (error: any) {
    throw new Error(error)
  } finally {
    loading.value = false;
    open.value = false;
  }
}
</script>

<template>
  <AlertDialog :open="open">
    <AlertDialogTrigger>
        <Button @click="open=true">Add a new product</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Create a new product</AlertDialogTitle>
        <input placeholder="my product name"/>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="open=false">Cancel</AlertDialogCancel>
        <AlertDialogAction @click="createNewProduct()">Create</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>