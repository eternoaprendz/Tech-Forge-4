// exercicio 1

class Cart {
    private items: { item: string; price: number }[] = [];
    private totalPrice: number = 0;
  
    addItem(item: string, price: number): void {
      this.items.push({ item, price });
      this.totalPrice += price;
    }
  
    getTotalPrice(): number {
      return this.totalPrice;
    }
  
    getItems(): string[] {
      return this.items.map((entry) => entry.item);
    }
  }
  
  class Payment {
    private paymentStatus: string = "Pending";
  
    processPayment(totalPrice: number): void {
      if (this.paymentStatus === "Paid") {
        console.log("Pagamento já processado.");
        return;
      }
      this.paymentStatus = "Paid";
      console.log(`Pagamento de ${totalPrice} processado.`);
    }
  
    getPaymentStatus(): string {
      return this.paymentStatus;
    }
  }
  
  class Shipping {
    private shippingStatus: string = "Not Shipped";
  
    updateShippingStatus(status: string): void {
      this.shippingStatus = status;
      console.log(`Status de envio atualizado para: ${status}`);
    }
  
    getShippingStatus(): string {
      return this.shippingStatus;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    addItem(item: string, price: number): void {
      this.cart.addItem(item, price);
    }
  
    processPayment(): void {
      this.payment.processPayment(this.cart.getTotalPrice());
    }
  
    updateShippingStatus(status: string): void {
      this.shipping.updateShippingStatus(status);
    }
  
    getOrderSummary(): string {
      return `Itens: ${this.cart.getItems().join(", ")}\nPreço Total: ${this.cart.getTotalPrice()}\nStatus do Pagamento: ${this.payment.getPaymentStatus()}\nStatus do Envio: ${this.shipping.getShippingStatus()}`;
    }
  }
  
  const order = new Order();
  order.addItem("Camiseta", 50);
  order.addItem("Calça", 100);
  order.processPayment();
  order.updateShippingStatus("Shipped");
  
  console.log(order.getOrderSummary());

  // exercicio 2

class EmailNotification {
    sendEmail(username: string): void {
      console.log(`Enviando email para ${username}...`);
    }
  }
  
  class UserManager {
    private users: string[] = [];
    private emailNotification: EmailNotification;
  
    constructor(emailNotification: EmailNotification) {
      this.emailNotification = emailNotification;
    }
  
    createUser(username: string): void {
      this.users.push(username);
      console.log(`Usuário ${username} criado com sucesso!`);
      this.emailNotification.sendEmail(username); 
    }
  
    getUsers(): string[] {
      return this.users;
    }
  }
  
  const emailNotification = new EmailNotification();
  const userManager = new UserManager(emailNotification);
  
  userManager.createUser("antonio");
  userManager.createUser("amanda");
  
  console.log("Usuários:", userManager.getUsers());

  // exercicio 3

class ContactValidator {
    validate(contact: string): boolean {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(contact);
    }
  }
  
  class EmailSender {
    private contactValidator: ContactValidator;
  
    constructor(contactValidator: ContactValidator) {
      this.contactValidator = contactValidator;
    }
  
    sendEmail(contact: string, message: string): void {
      if (this.contactValidator.validate(contact)) {
        console.log(`Enviando email para ${contact}: ${message}`);
        
      } else {
        console.log(`Erro: O contato ${contact} é inválido.`);
      }
    }
  }
  
  const contactValidator = new ContactValidator();
  const emailSender = new EmailSender(contactValidator);
  
  emailSender.sendEmail("test@exemplo.com", "teste");
  emailSender.sendEmail("invalid-email", "falha na validação.");