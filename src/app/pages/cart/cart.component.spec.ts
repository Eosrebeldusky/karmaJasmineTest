import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookService } from "src/app/services/book.service";
import { CartComponent } from "./cart.component";
import { Book } from "src/app/models/book.model";

const listBook: Book[] = [
    {name:'',author:'',isbn:'',price:15,amount:2},
    {name:'',author:'',isbn:'',price:20,amount:1},
    {name:'',author:'',isbn:'',price:30,amount:100}
]


describe('Cart component', ()=>{

    let component : CartComponent;
    let fixture : ComponentFixture<CartComponent>;


    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule
            ],
            declarations:[CartComponent],
            providers:[
                BookService
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance; 
        fixture.detectChanges();
    });

    it('should create', ()=>{
            expect(component).toBeTruthy(); //El expect es el test. que espero que haga 
    })



    // public getTotalPrice(listCartBook: Book[]): number {
    //     let totalPrice = 0;
    //     listCartBook.forEach((book: Book) => {
    //       totalPrice += book.amount * book.price;
    //     });
    //     return totalPrice;
    //   }


    it('getTotalPrice returns amount',()=>{
        const totalprice = component.getTotalPrice(listBook); //Aca guardamos el valor.
        expect(totalprice).toBeGreaterThan(0)
    })


});