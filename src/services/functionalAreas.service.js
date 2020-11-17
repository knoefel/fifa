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
