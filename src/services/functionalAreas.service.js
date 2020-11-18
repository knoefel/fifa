import { functionalAreas as initialFunctionalAreas } from "@/mocks/functionalAreas";

class FunctionalAreasService {
  functionalAreas = initialFunctionalAreas;

  async getAll() {
    try {
      return await this._getAll();
    } catch {
      console.error("Error while fetching Functional Areas");
    }
  }

  async getById(id) {
    try {
      return await this._getById(id);
    } catch {
      console.error("Error while fetching Functional Area");
    }
  }

  async create(functionalAreaInput) {
    try {
      return await this._create(functionalAreaInput);
    } catch {
      console.error("Error while creating Functional Area");
    }
  }

  async update(functionalArea) {
    try {
      return await this._update(functionalArea);
    } catch {
      console.error("Error while updating Functional Area");
    }
  }

  async delete(id) {
    try {
      return await this._delete(id);
    } catch {
      console.error("Error while deleting Functional Area");
    }
  }

  /**
   * Faking API calls
   */
  async _getAll() {
    return new Promise((resolve) => resolve(this.functionalAreas));
  }

  async _getById(id) {
    return new Promise((resolve) =>
      resolve(this.functionalAreas.find(({ id: faId }) => faId === Number(id)))
    );
  }

  async _create(functionalAreaInput) {
    return new Promise((resolve) => {
      const ids = this.functionalAreas.map(({ id }) => id);
      const maxId = Math.max(...ids);

      const newFunctionalArea = {
        id: maxId + 1,
        ...functionalAreaInput,
      };

      this.functionalAreas = [...this.functionalAreas, newFunctionalArea];

      resolve(newFunctionalArea);
    });
  }

  async _update(updatedFunctionalArea) {
    return new Promise((resolve) => {
      this.functionalAreas = this.functionalAreas.map((functionalArea) =>
        functionalArea.id === updatedFunctionalArea.id
          ? updatedFunctionalArea
          : functionalArea
      );

      resolve(updatedFunctionalArea);
    });
  }

  async _delete(id) {
    return new Promise((resolve) => {
      this.functionalAreas = this.functionalAreas.filter(
        ({ id: faId }) => faId !== id
      );

      return resolve(true);
    });
  }
}

export default new FunctionalAreasService();
