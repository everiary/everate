<template>
    <Teleport to="body">
        <div class="formClass" v-show="active">
            <div class="formFramework">
                <div class="formHeader">
                    <span id="formTitle">{{ title }}</span>
                    <span id="crossBtn"><button @click="active = !active" style="padding: 0.5vw;font-size: 1vw;">x</button></span>
                </div>
                <div class="formBody">
                    <!--<slot></slot>-->
                    111111111
                </div>
                <div class="formFooter">
                    <button @click="active = !active" style="margin-right: 2vw;">cancel</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { inject, ref } from 'vue'
const show = inject('isOpen')
const active = ref(show)
const title = ref('wemsx')
console.log(show)
</script>

<style scoped>
.formClass {
    position: fixed;
    left: 0vw;
    top: 0vw;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
}

.formFramework {
    position: fixed;
    width: 40vw;
    height: 60vh;
    border-radius: 1vw;
    background: #baccd9;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.formHeader {
    align-items: flex-end;
    height: 10vh;
}
.formBody {
    height: 40vh;
}
.formFooter {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

#formTitle {
    position: absolute;
    padding: 1vw;
    left: 0px;
    font-size: 3vw;
}
#crossBtn {
    position: absolute;
    padding: 1vw;
    right: 0px
}
</style>