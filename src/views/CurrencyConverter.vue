<template>
  <div>
    <h1>Currency converter</h1>
    <div>
      <input @input="calculate()" v-model.number="sourceValue" type="number" />
      <select
        @change="calculate()"
        v-model="sourceCurrency"
        name="source-currency"
        id="source-currency"
      >
        <option
          v-for="(currency, index) in currencies"
          :key="index"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>
    <div>
      <input :value="targetValue" type="number" disabled />
      <select
        @change="calculate"
        v-model="targetCurrency"
        name="target-currency"
        id="target-currency"
      >
        <option
          v-for="(currency, index) in currencies"
          :key="index"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { calculateRate, currencies } from "../utils/rates";

export default {
  name: "CurrencyConverter",
  created() {
    this.calculate();
  },
  data() {
    return {
      sourceValue: 1,
      sourceCurrency: currencies[0],
      targetValue: null,
      targetCurrency: currencies[1],
      error: null,
      currencies: currencies
    };
  },
  methods: {
    calculate() {
      this.error = null;
      try {
        this.targetValue =
          this.sourceValue *
          calculateRate(this.sourceCurrency, this.targetCurrency);
      } catch (exception) {
        this.error = exception;
        this.targetValue = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
