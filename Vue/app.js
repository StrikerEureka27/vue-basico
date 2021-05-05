Vue.component('coinDetail', {
    props: ['coin'],

    data() {
        return {
            showPrices: false,
            value: 0,
        }
    },

    created () {
        console.log('Created Son...');
    }, 

    mounted () {
        console.log('Mounted Son...');
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
            //this.color = this.color.split('').reverse().join('');

            this.$emit('change-color', '3D3D3D');
        }
    },

    computed: {
        convertValue() {
            if (this.value === 0) {
                return 0;
            } else {
                return this.value / this.coin.price
            }
        },
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`
        }

    },

    template:
        `
        <div>
            <img v-on:mouseover="toggleShowPrices"
                v-on:mouseout="toggleShowPrices" 
                v-bind:src="coin.img" 
                v-bind:alt="coin.name">
            </img>
            <h1 v-bind:class="showPrices ? 'green' : 'red' " >
                {{ coin.title }}
                <span v-if="coin.changePercent > 184 " >✅</span>
                <span v-else >❌</span>

                <span v-on:click="toggleShowPrices">
                {{ showPrices ? '🚗' : '🚕'  }}
                </span>
            </h1>
            <input type="text" v-model="value" >
            <span>{{ convertValue }}</span>

            <slot name="text" ></slot>
            <slot name="link" ></slot>
            
            <ul>
                <li v-for="(element, x) in coin.prices">
                     {{x}} {{element}}
                </li>
            </ul>
        
            <ul v-show="showPrices">
                <li  class="letter"
                    v-for="pw in coin.pricesWithDays"
                    v-bind:class="{ 
                        orange: pw.value == coin.price,
                        red: pw.value < coin.price, 
                        green: pw.value > coin.price
                        }" 
                    v-bind:key="pw.day">
                    {{ pw.day }} : {{ pw.value }}
                </li>
            </ul>
        </div>
    `
})

// Componente padre 
new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 100,
                symbol: 'BTC',
                prices: [8400, 9001, 5500, 2300, 9400, 3200, 9000],
                pricesWithDays: [
                    { day: 'Lunes', value: '8400' },
                    { day: 'Martes', value: '3500' },
                    { day: 'Miercoles', value: '9500' },
                ],
                price: 8400,
            }, 
            color: 'EFFEFE'
        }
    },

    created () {
        console.log('Created Father...');
    }, 

    mounted () {
        console.log('Mounted Father...');
    },

    methods: {
        updateColor () {
            this.color = this.color.split('').reverse().join('');
        }
    }
    // watch: {
    //     showPrices(newVal, oldVal) {
    //         console.log(newVal, oldVal)
    //     }
    // },

})