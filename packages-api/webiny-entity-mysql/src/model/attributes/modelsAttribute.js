// @flow
import { ModelsAttribute as BaseModelsAttribute } from "webiny-model";

class ModelsAttribute extends BaseModelsAttribute {
    setStorageValue(value: any) {
        this.setValue(JSON.parse(value));
        return this;
    }

    async getStorageValue() {
        if (this.isEmpty()) {
            return null;
        }

        return JSON.stringify(await BaseModelsAttribute.prototype.getStorageValue.call(this));
    }
}

export default ModelsAttribute;
