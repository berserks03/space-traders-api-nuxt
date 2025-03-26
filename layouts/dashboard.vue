<template>
    <NavBar :agent="userdata.agent" />
    <slot class="p-4" />
</template>

<script lang="ts" setup>
const userdata = useUserData();
if (!userdata.value.token) {
    navigateTo('/authorize');
}
</script>
