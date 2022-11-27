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
    let service : BookService

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
        service = fixture.debugElement.injector.get(BookService)
        component = fixture.componentInstance; 
        fixture.detectChanges();
    });

    it('should create', ()=>{
            expect(component).toBeTruthy(); //El expect es el test. que espero que haga 
    })

    it('getTotalPrice returns amount',()=>{
        const totalprice = component.getTotalPrice(listBook); //Aca guardamos el valor.
        expect(totalprice).toBeGreaterThan(0)
        expect(totalprice).not.toBeNull()
    })


    // public onInputNumberChange(action: string, book: Book): void {
    //     const amount = action === 'plus' ? book.amount + 1 : book.amount - 1;
    //     book.amount = Number(amount);
    //     this.listCartBook = this._bookService.updateAmountBook(book);
    //     this.totalPrice = this.getTotalPrice(this.listCartBook);
    //   }

    it('onInputNumberChange increments', ()=>{
        const action = 'plus'
        const book = {name:'',author:'',isbn:'',price:15,amount:2};
        

        const spy1 = spyOn(service,'updateAmountBook').and.callFake( ()=> null );
        const spy2 = spyOn(component,'getTotalPrice').and.callFake( ()=> null );

        expect(book.amount).toBe(2)

        component.onInputNumberChange(action,book)

        expect(book.amount).toBe(3)
         
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();        
               
    })


    it('onInputNumber Decrement', ()=>{
        const action = 'minus'
        const book = {name:'',author:'',isbn:'',price:15,amount:2};
       

        const spy1 = spyOn(service,'updateAmountBook').and.callFake( ()=> null );
        const spy2 = spyOn(component,'getTotalPrice').and.callFake( ()=> null );

        expect(book.amount).toBe(2); // confirmo valor de amount

        component.onInputNumberChange(action,book) //llamo a la resta

        expect(book.amount).toBe(1); //reviso si restó

        expect(spy1).toHaveBeenCalled(); //llamamos al servicio que hay en spy01?
        expect(spy2).toHaveBeenCalled(); //llamamos al servicio que hay en spy02?
       
    })



    // public onClearBooks(): void {
    //     if (this.listCartBook && this.listCartBook.length > 0) {
    //       this._clearListCartBook();
    //     } else {
    //        console.log("No books available");
    //     }
    //   }
    
    //   private _clearListCartBook() {
    //     this.listCartBook = [];
    //     this._bookService.removeBooksFromCart();
    //   }

    //vid 25
    
});