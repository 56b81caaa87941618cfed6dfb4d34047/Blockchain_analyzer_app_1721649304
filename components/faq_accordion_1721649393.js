Vue.component('faq_accordion_1721649393', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Blockchain Data Analytics FAQs</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to common questions about our blockchain data analysis platform</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What is blockchain data analytics?",
          a: "Blockchain data analytics involves parsing, analyzing and extracting insights from data stored on blockchain networks. Our platform ingests real-time blockchain data and provides tools to query, visualize and build analytics applications on this data."
        },
        {
          q: "What blockchain networks do you support?",
          a: "We currently support Bitcoin, Ethereum, and other major public blockchains. We are continuously adding support for more networks based on user demand."
        },
        {
          q: "How can I analyze blockchain data?",
          a: "You can use our SQL-like query language to extract, transform and analyze blockchain data. We also provide API endpoints and data connectors to integrate with business intelligence and analytics tools."
        },
        {
          q: "What kind of blockchain analytics can I do?",
          a: "With our platform, you can perform on-chain analytics like tracking asset flows, identifying whales, clustering addresses, and detecting anomalies. You can also build custom analytics applications and dashboards."
        },
        {
          q: "How is data kept secure and private?",
          a: "We use advanced encryption and access control to keep your blockchain data fully private and secure. Only you have access to analyze your data within our secure analytics environment."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});