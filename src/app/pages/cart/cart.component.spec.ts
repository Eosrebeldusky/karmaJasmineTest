import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookService } from "src/app/services/book.service";
import { CartComponent } from "./cart.component";


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
        });
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance; 
        fixture.detectChanges();
    });

    it('should create', ()=>{
            expect(component).toBeTruthy();            
    })

});