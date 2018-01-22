import { EntityAttributesContainer } from "webiny-entity";
import {
    BooleanAttribute,
    DateAttribute,
    ModelAttribute,
    ModelsAttribute,
    EntitiesAttribute
} from "./attributes";

/**
 * Contains basic attributes. If needed, this class can be extended to add additional attributes,
 * and then be set as a new attributes container as the default one.
 */
class MySQLAttributesContainer extends EntityAttributesContainer {
    boolean() {
        const model = this.getParentModel();
        model.setAttribute(this.name, new BooleanAttribute(this.name, this));
        return model.getAttribute(this.name);
    }

    date() {
        const model = this.getParentModel();
        model.setAttribute(this.name, new DateAttribute(this.name, this));
        return model.getAttribute(this.name);
    }

    model(model) {
        const parent = this.getParentModel();
        parent.setAttribute(this.name, new ModelAttribute(this.name, this, model));
        return parent.getAttribute(this.name);
    }

    models(model) {
        const parent = this.getParentModel();
        parent.setAttribute(this.name, new ModelsAttribute(this.name, this, model));
        return parent.getAttribute(this.name);
    }

    entities(entity, attribute = null) {
        const parent = this.getParentModel();
        parent.setAttribute(this.name, new EntitiesAttribute(this.name, this, entity, attribute));
        return parent.getAttribute(this.name);
    }
}

export default MySQLAttributesContainer;
