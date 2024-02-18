export interface IProducts {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    quantity:number
   // isEdit?:boolean 
  }
  
  export interface Rating {
    rate: number
    count: number
  }
  