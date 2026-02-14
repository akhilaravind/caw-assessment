export type Operator = '>' | '<' | '=' | '!=' | '>=' | '<=' | 'contains';
export type Field = 'Price' | 'Category' | 'Rating';

export interface BaseNode {
    id: string;
}

export interface RuleNode extends BaseNode {
    type: 'rule';
    field: Field;
    operator: Operator;
    value: string;
}

export interface GroupNode extends BaseNode {
    type: 'group';
    operator: 'AND' | 'OR';
    children: ConditionNode[];
}

export type ConditionNode = RuleNode | GroupNode;