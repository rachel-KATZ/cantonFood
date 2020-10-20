window.onload = () => {

    class Food {
        constructor(name, desc, img) {
            [this.name, this.desc, this.img] = [name, desc, img]
        }
    }

    const foodsArr = [new Food('coconut rabbit pudding',
        'Coconut rabbit pudding is a traditional Chinese dessert. It can be made into different types and shapes. People usually eat the pudding after diner as dessert or snack. More importantly, the pudding is really nutritional due to ingredient of coconut. It becomes more delicious after being refrigerated.', ''),
    new Food('White Carrot & Brisket Clay Pot',
        'White Carrot & Brisket Clay Pot is a traditional Cantonese dish. It is suitable for any kind of people to eat, especially those who are physically weak and demand in abundant nutrition. Also, white carrot has its unique soft taste so both old people and young children are able to eat it.', ''),
    new Food('tomato beef hot pot',
        'The tomato beef hot pot is popular among Cantonese because it is not spicy, unlike the hotpot in Sichuan or Chongqing. After ordering meat and vegetables for your hot pot, you can the go and visit the sauce bar offered a variety of sauces. It is more than just a food experience, but the food is divine.', ''),
    new Food('Fried oyster and egg',
        'Fried oyster and egg is a traditional Chinese dish, originated in Guangdong area. Since Guangdong is located near the sea, it has abundant seafood including the oyster. Eating the oyster alone is very greasy. However, after mixing with fried eggs, the oyster becomes more appetizing to pair with rice.', ''),
    new Food('Chaoshan beef hotpot',
        'Chaoshan is a place in Guangdong province. It is famous for its handmade meat balls and aromatic spices.  For the chaoshan hotpot, you can have a taste in characteristic chaoshan food. For example, the Chanshan beef balls are the dish you must order because chanshan people add their unique sauces in them, pretty amazing.', ''),
    new Food('6 fried oyster',
        'Guangdong is famous for its abundant seafood, including a variety of fish and shellfish. Oyster is one of the most common and famous seafood in Guangdong. The one shows in the picture belongs to the long shellfish. Mixing with the aromatic spices, garlic, chili peppers, soy sauce and rice wine, the fried oyster has its unique Cantonese flavor.', ''),
    new Food('Roasted pigeon',
        'Roasted pigeon is one of the most famous dishes in Guangdong. Comparing to the roasted chicken or duck, it is much smaller and delicate. The skin of the pigeon , served with sugar, melts in your mouth when you taste it. Also, there are variety of different sauces you can enjoy in your pigeon such as Sweet Bean and Plum flavors.', ''),
    new Food('Fried shrimps',
        'Fried shrimp is really famous in Guangdong areas. It becomes much easier to eat because the shrimps becomes crisp and do not need to be shelled. Also, the fried shrimps are really nutritional because their shells contained with abundant calcium. Sometimes the shrimps are fired with the tea leaves so they are tasted better.', ''),
    new Food('Chinese sauerkraut with fried eggplant',
        'Sauerkraut with fried eggplant is a common home cooking in China. Sauerkraut is a fermented vegetable that always be used in many Chinese dishes. Eggplant is also an important ingredient in Chinese dishes. The add of Sauerkraut makes the eggplant taste sour so the dish pairs excellently with Chinese rice. Also, the eggplant tastes really soft, enabling both old people and young children to eat.', ''),
    new Food('Walnut baozi(buns)',
        'Walnut baozi is a traditional Cantonese dessert. Baozi is a kind of Chinese bun, with traditional ferment measure. The stuffing of the baozi is walnut and syrup. People usually eat walnut baozi when they have breakfast. Parents encourage their children to eat walnut baozi because they think walnut is good for the development of intelligence.', ''),
    new Food('11 steamed fish',
        'Steamed fish is a common dish for Chinese home cooking. For Guangdong people, they prefer steamed fish because they think it is healthier than the fried fish. Steamed fish is often added with soy sauce and garlic so the dish will not smell fishy. Also, the steamed fish is taste very tender.', ''),
    new Food('Roasted pigeon',
        'Roasted pigeon is one of the most famous dishes in Guangdong. Comparing to the roasted chicken or duck, it is much smaller and delicate. The skin of the pigeon , served with sugar, melts in your mouth when you taste it. Also, there are variety of different sauces you can enjoy in your pigeon such as Sweet Bean and Plum flavors.', ''),
    new Food('Cantonese hot pot',
        'Cantonese hot pot is popular in Guangdong because it is not spicy, unlike the hotpot in Sichuan or Chongqing. After ordering meat and vegetables for your hot pot, you can the go and visit the sauce bar offered a variety of sauces. It is more than just a food experience, but the food is divine.', ''),
    new Food('Xiao long bao',
        'Xiao long bao is kind of Chinese dumplings but it is also similar to the baozi(Chinese buns). It is smooth and translucent,steamed in the Chinese food steamer. Chinese food steamers are usually made up of bamboos so the food steamed in steamers will have the aroma of bamboos.', ''),
    new Food('shrimp dumplings',
        'Shrimp dumplings play important role in Cantonese dishes. It can be eaten for breakfast, lunch or dinner and are a great meal to share. Dig them in Soy Sauce or Vinegar can enhance the flavor further. The shrimp dumplings are steamed food so they are really healthy.', ''),
    new Food('16 fried pigeon with rice',
        'Fried pigeon is one of the most famous dishes in Guangdong. Comparing to the fried chicken or duck, it is much smaller and delicate. The skin of the pigeon , served with sugar, melts in your mouth when you taste it. Also, there are variety of different sauces you can enjoy in your pigeon such as Sweet Bean and Plum flavors. It pairs excellently with rice.', ''),
    new Food('Papaya  fish maw chicken coconut soup',
        'Papaya  fish maw chicken coconut soup is a famous dish in China. It always uses coconut shells as the bowl of the soup. The most attractive characteristics of the dish is that all the ingredients shows the fragrance of coconut. Also, the soup is highly nutritional because the add of fish maw, an important food material in China.', ''),
    new Food('boiled chicken with sauce',
        'Boiled chicken with sauce is popular among Cantonese. Unlike fried or roasted chicken, boiled chicken has a tender texture and a delicate subtle taste. There are variety of different sauces for the boiled chicken including soy sauce, vinegar, or Cantonese sweet sauce.', ''),
    new Food('Cantonese egg tart',
        'Cantonese egg tart is an important dish in Cantonese dimsum.  Cantonese breakfast always incorporate egg tarts. It is said that the Cantonese egg tart originated in 1920. At that time, Cantonese department stores wanted to attract customers so they launched new product, egg tart, to the market.', ''),
    new Food('changfen',
        'Changfen is a traditional Cantonese food. It is made up of flour, meat, and vegetables.  The stuffing can be any kind of meat including  steamed pork, beef, roasted pork and pork liver. It is usually cooked in steamers with traditional soy sauce. People usually eat changfen at breakfast. ', ''),
    new Food('boiled chicken with sauce',
        'Boiled chicken with sauce is popular among Cantonese. Unlike fried or roasted chicken, boiled chicken has a tender texture and a delicate subtle taste. There are variety of different sauces for the boiled chicken including soy sauce, vinegar, or Cantonese sweet sauce.', ''),
    new Food('steamed fish',
        'Steamed fish is a common dish for Chinese home cooking. For Guangdong people, they prefer steamed fish because they think it is healthier than the fried fish. Steamed fish is often added with soy sauce and garlic so the dish will not smell fishy. Also, the steamed fish is taste very tender.', '')
    ]

    var app = new Vue({
        el: '#app',
        data: {
            //   message: 'Hello Vue!'
            foods: [],
            foodIndex:0
            
        },
        methods:{
            foodClick:function(e){
                // console.log();
                let box = document.querySelector('#foods').getBoundingClientRect()
                console.log(box);
                console.log(e.clientX);
                if(e.clientX + 400 > window.innerWidth){
                    console.log('out');
                    document.querySelector('#foods').style.left = `${window.innerWidth - 400}px`
                }else{
                    document.querySelector('#foods').style.left = `${e.clientX}px`
                }
                
                document.querySelector('#foods').style.top = `${e.clientY}px`
                this.foodIndex = e.srcElement.id
                
                
                

            }
        },
        mounted() {
            this.foods = foodsArr
        }
    })
    // console.log(app);





   











}