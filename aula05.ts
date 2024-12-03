//exercicio 1

abstract class TaskManager {
    protected tasks: Set<{ name: string; type: string }> = new Set();
  
    abstract addTask(task: { name: string; type: string }): void;
    abstract listTasks(): string[];
  }
  
  class Project extends TaskManager {
    addTask(task: { name: string; type: string }): void {
      if (task.type !== "project") {
        throw new Error("Esta tarefa deve ser do tipo 'project'.");
      }
      const taskKey = JSON.stringify(task);
      if ([...this.tasks].find(t => JSON.stringify(t) === taskKey)) {
        throw new Error("Essa tarefa ja existe no projeto.");
      }
      this.tasks.add(task);
    }
  
    listTasks(): string[] {
      return [...this.tasks]
        .filter(task => task.type === "project")
        .map(task => task.name);
    }
  }
  
  class DailyTasks extends TaskManager {
    addTask(task: { name: string; type: string }): void {
      if (task.type !== "daily") {
        throw new Error("Esta tarefa deve ser do tipo 'daily'.");
      }
      const taskKey = JSON.stringify(task);
      if ([...this.tasks].find(t => JSON.stringify(t) === taskKey)) {
        throw new Error("Essa tarefa ja existe nas tarefas diarias.");
      }
      this.tasks.add(task);
    }
  
    listTasks(): string[] {
      return [...this.tasks]
        .filter(task => task.type === "daily")
        .map(task => task.name);
    }
  }
  
  const projectManager = new Project();
  const dailyManager = new DailyTasks();
  
  try {
    projectManager.addTask({ name: "Implementar API", type: "project" });
    projectManager.addTask({ name: "Testar modulo de login", type: "project" });
    dailyManager.addTask({ name: "Fazer cafe", type: "daily" });
    dailyManager.addTask({ name: "Revisar emails", type: "daily" });
  
    console.log("Tarefas do projeto:", projectManager.listTasks());
    console.log("Tarefas diarias:", dailyManager.listTasks());
  
    projectManager.addTask({ name: "Testar modulo de login", type: "project" });
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  
  // exexrcicio 2
abstract class Inventory {
    protected items: Record<string, number> = {};
  
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
  }
  
  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (quantity <= 0) {
        throw new Error("A quantidade deve ser maior que zero.");
      }
      this.items[item] = (this.items[item] || 0) + quantity;
    }
  
    removeItem(item: string): void {
      if (!this.items[item]) {
        throw new Error("Item nao encontrado no inventario.");
      }
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  class StoreInventory extends Inventory {
    private maxQuantity = 10;
  
    addItem(item: string, quantity: number): void {
      if (quantity <= 0) {
        throw new Error("A quantidade deve ser maior que zero.");
      }
      const currentQuantity = this.items[item] || 0;
      const newQuantity = currentQuantity + quantity;
      if (newQuantity > this.maxQuantity) {
        throw new Error(
          `A quantidade de ${item} excede o limite permitido de ${this.maxQuantity}.`
        );
      }
      this.items[item] = newQuantity;
    }
  
    removeItem(item: string): void {
      if (!this.items[item]) {
        throw new Error("Item nao encontrado no inventario.");
      }
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  const warehouse = new WarehouseInventory();
  const store = new StoreInventory();
  
  try {
    warehouse.addItem("Cimento", 500);
    warehouse.addItem("Areia", 300);
    store.addItem("Chocolate", 5);
    store.addItem("Sorvete", 10);
  
    console.log("Inventario do armazem:", warehouse.getInventory());
    console.log("Inventario da loja:", store.getInventory());
  
    store.addItem("Chocolate", 6);
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  
  try {
    warehouse.removeItem("Areia");
    console.log("Inventario do armazem apos remocao:", warehouse.getInventory());
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  
  // exercicio 3

abstract class FavoriteManager {
    protected favorites: string[] = [];
  
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (this.favorites.indexOf(item) === -1) {
        this.favorites.push(item);
      }
      this.favorites.sort();
    }
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (this.favorites.indexOf(item) === -1) {
        this.favorites.unshift(item);
      }
    }
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  const movieManager = new MoviesFavoriteManager();
  const bookManager = new BooksFavoriteManager();
  
  movieManager.addFavorite("Interstellar");
  movieManager.addFavorite("Inception");
  movieManager.addFavorite("Interstellar");
  bookManager.addFavorite("1984");
  bookManager.addFavorite("Brave New World");
  bookManager.addFavorite("1984");
  
  console.log("Filmes favoritos:", movieManager.getFavorites());
  console.log("Livros favoritos:", bookManager.getFavorites());

  // exercicio 4

abstract class VoteSystem {
    protected votes: Record<string, number> = {};
  
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    voteFor(candidate: string): void {
      this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    voteFor(candidate: string): void {
      this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
  
    getResults(): object {
      const sortedEntries = Object.entries(this.votes).sort(
        (a: [string, number], b: [string, number]) => b[1] - a[1]
      );
  
      const sortedResults: Record<string, number> = sortedEntries.reduce(
        (acc: Record<string, number>, [candidate, votes]: [string, number]) => {
          acc[candidate] = votes;
          return acc;
        },
        {}
      );
  
      return sortedResults;
    }
  }
  
  const election = new Election();
  const poll = new Poll();
  
  election.voteFor("Alice");
  election.voteFor("Bob");
  election.voteFor("Alice");
  poll.voteFor("Charlie");
  poll.voteFor("Alice");
  poll.voteFor("Alice");
  poll.voteFor("Bob");
  
  console.log("Resultados da eleicao:", election.getResults());
  console.log("Resultados da enquete:", poll.getResults());
  
  