<template>
	<div class="home">
		<HelloWorld :msg="msg" />
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld.vue';
	//	import axios from 'axios'
	export default {
		name: 'Home',
		components: {
			HelloWorld,
		},
		data() {
			return {
				msg: [{
					"Field1": "2007",
					"Field2": "6494",
					"Field3": "1292",
					"Field4": "3184",
					"Field5": "662",
					"Field6": "3225",
					"Field7": "607",
					"Field8": "80",
					"Field9": "21",
					"Field10": "5",
					"Field11": "2",
					"Field12": "343.04",
					"Field13": "68.38"
				}, {
					"Field1": "2008",
					"Field2": "6691",
					"Field3": "1257",
					"Field4": "3546",
					"Field5": "616",
					"Field6": "3032",
					"Field7": "628",
					"Field8": "108",
					"Field9": "13",
					"Field10": "0",
					"Field11": "0",
					"Field12": "351.02",
					"Field13": "65.819999999999993"
				}, {
					"Field1": "2009",
					"Field2": "7589",
					"Field3": "1257",
					"Field4": "2912",
					"Field5": "628",
					"Field6": "4496",
					"Field7": "873",
					"Field8": "166",
					"Field9": "14",
					"Field10": "4",
					"Field11": "1",
					"Field12": "395.18",
					"Field13": "65.02"
				}, {
					"Field1": "2010",
					"Field2": "7830",
					"Field3": "1518",
					"Field4": "2131",
					"Field5": "466",
					"Field6": "5505",
					"Field7": "1028",
					"Field8": "184",
					"Field9": "23",
					"Field10": "10",
					"Field11": "1",
					"Field12": "405.36",
					"Field13": "77.69"
				}, {
					"Field1": "2011",
					"Field2": "7177",
					"Field3": "1335",
					"Field4": "1673",
					"Field5": "351",
					"Field6": "5279",
					"Field7": "961",
					"Field8": "211",
					"Field9": "23",
					"Field10": "14",
					"Field11": "0",
					"Field12": "370.38",
					"Field13": "67.8"
				}, {
					"Field1": "2012",
					"Field2": "7223",
					"Field3": "1253",
					"Field4": "1496",
					"Field5": "255",
					"Field6": "5215",
					"Field7": "960",
					"Field8": "509",
					"Field9": "38",
					"Field10": "3",
					"Field11": "0",
					"Field12": "371.7",
					"Field13": "63.13"
				}, {
					"Field1": "2013",
					"Field2": "6861",
					"Field3": "1215",
					"Field4": "1379",
					"Field5": "228",
					"Field6": "4944",
					"Field7": "934",
					"Field8": "525",
					"Field9": "52",
					"Field10": "13",
					"Field11": "1",
					"Field12": "352.15",
					"Field13": "60.79"
				}, {
					"Field1": "2014",
					"Field2": "6993",
					"Field3": "1204",
					"Field4": "1561",
					"Field5": "263",
					"Field6": "5146",
					"Field7": "901",
					"Field8": "283",
					"Field9": "37",
					"Field10": "3",
					"Field11": "3",
					"Field12": "358.45",
					"Field13": "59.9"
				}, {
					"Field1": "2015",
					"Field2": "8650",
					"Field3": "1442",
					"Field4": "1656",
					"Field5": "338",
					"Field6": "6470",
					"Field7": "1047",
					"Field8": "519",
					"Field9": "55",
					"Field10": "5",
					"Field11": "2",
					"Field12": "443.24",
					"Field13": "71.489999999999995"
				}, {
					"Field1": "2016",
					"Field2": "9897",
					"Field3": "1612",
					"Field4": "1815",
					"Field5": "366",
					"Field6": "7660",
					"Field7": "1204",
					"Field8": "412",
					"Field9": "41",
					"Field10": "10",
					"Field11": "1",
					"Field12": "507.06",
					"Field13": "79.680000000000007"
				}, {
					"Field1": "2017",
					"Field2": "10446",
					"Field3": "1721",
					"Field4": "1553",
					"Field5": "295",
					"Field6": "8266",
					"Field7": "1356",
					"Field8": "624",
					"Field9": "70",
					"Field10": "3",
					"Field11": "0",
					"Field12": "534.91",
					"Field13": "84.78"
				}, {
					"Field1": "2018",
					"Field2": "9554",
					"Field3": "1578",
					"Field4": "1813",
					"Field5": "310",
					"Field6": "7307",
					"Field7": "1199",
					"Field8": "428",
					"Field9": "69",
					"Field10": "6",
					"Field11": "0",
					"Field12": "488.9",
					"Field13": "77.47"
				}],
			}
		},
		mounted() {
			//			axios.get('')
			//				.then((response) => {
			//					console.log(response.data);
			//					this.msg = response.data;
			//				})
			//				.catch((error) => {
			//					console.log(error);
			//				});

		},
	}
</script>