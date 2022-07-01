<template>
  <div>
    <h1 class="p-4 m-4">LeadHit</h1>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <form class="form-control p-4">
        <div class="form-group mb-4">
          <label for="exampleInputEmail1" class="text-start">Id сайта</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="sdf45sd6f4s1dfs86df4sd"
            v-model="leadHitId"
            @input="lengthError = false"
          />
          <p class="mt-2 text-danger px-0" v-if="lengthError">
            id сайта должен содержать 24 символа
          </p>
        </div>
        <button type="submit" class="w-100 btn btn-primary" @click="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const leadHitId = ref("");
const lengthError = ref(false);
const router = useRouter();

const submit = () => {
  lengthError.value = leadHitId.value.length !== 24;
  if (lengthError.value) {
    return;
  } else {
    try {
      axios.get(" https://track-api.leadhit.io/client/test_auth", {
        headers: {
          "Api-Key": " 5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "leadhit-site-id": "5f8475902b0be670555f1bb3",
        },
      });
      leadHitId.value = "";
      localStorage.setItem("leadhit-site-id", "5f8475902b0be670555f1bb3");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.form-control {
  width: 100%;
  max-width: 400px;
}
</style>
