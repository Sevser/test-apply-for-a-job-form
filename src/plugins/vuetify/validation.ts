import type { Ref } from "vue";

export type VuetifyValidation = {
  validate: () => Promise<Ref<string[]>>;
}