import {makeAutoObservable} from "mobx";

export default class CounterStore{
    title = 'Counter store'
    count = 38
    events: string[] =[
        `Initial count is ${this.count}`
    ]
    
    constructor() {
        // 获取这个类的属性,对React应用程序可用.
        makeAutoObservable(this)
    }
    
    increment = (amount=1) => {
        this.count += amount
        this.events.push(`Incremented by ${amount} = count is now ${this.count}`)
    }
    decrement  = (amount=1) => {
        this.count -= amount
        this.events.push(`Decremented by ${amount} = count is now ${this.count}`)
    }
    
    get eventCount(){
        return this.events.length
    }
}