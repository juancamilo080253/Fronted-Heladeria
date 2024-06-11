export class Product {
    constructor(
        
        public id:number,
        public name:String,
        public description:String,
        public price:number,
        public urlImage:String,
        public image:File,
        public userId:String,
        public categoryId:String
    ){}

}
