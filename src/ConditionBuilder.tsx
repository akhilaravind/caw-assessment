import { useState } from "react";
import ConditionGroup from "./ConditionGroup";
import { addNodeToGroupInTree, deleteNodeFromTree, updateGroupOperatorInTree, updateRuleInTree } from "./helper";
import type { GroupNode, RuleNode } from "./types";

let nextId = 1;
const generateId = () => `cond-${Date.now()}-${nextId++}`;

const ConditionBuilder: React.FC = () => {

    const [rootGroup, setRootGroup] = useState<GroupNode>(() => ({
        id: generateId(),
        type: 'group',
        operator: 'AND',
        children: [{
            id: generateId(),
            type: 'rule',
            field: 'Price',
            operator: '>',
            value: '100'
        }]
    }));

    const handleUpdateRule = (ruleId: string, updates: Partial<RuleNode>) => {
        setRootGroup(prev => updateRuleInTree(prev, ruleId, updates));
    };

    const handleUpdateGroupOperator = (groupId: string, operator: 'AND' | 'OR') => {
        setRootGroup(prev => updateGroupOperatorInTree(prev, groupId, operator));
    };

    const handleAddRule = (groupId: string) => {
        const newRule: RuleNode = {
            id: generateId(),
            type: 'rule',
            field: 'Price',
            operator: '>',
            value: ''
        };
        setRootGroup(prev => addNodeToGroupInTree(prev, groupId, newRule));
    };

    const handleAddGroup = (groupId: string) => {
        const newGroup: GroupNode = {
            id: generateId(),
            type: 'group',
            operator: 'AND',
            children: []// always empty new children in group
        };
        setRootGroup(prev => addNodeToGroupInTree(prev, groupId, newGroup));
    };

    const handleDeleteNode = (nodeId: string) => {
        if (nodeId === rootGroup.id) return; // dont delete root group
        if (rootGroup.children.length === 1 && rootGroup.children[0].id === nodeId) {
            const newRule: RuleNode = {
                id: generateId(),
                type: 'rule',
                field: 'Price',
                operator: '>',
                value: '100'
            };
            setRootGroup({
                ...rootGroup,
                children: [newRule]
            });
            return;
        }

        setRootGroup(prev => deleteNodeFromTree(prev, nodeId));
    };

    return (
        <>
            <ConditionGroup
                group={rootGroup}
                isRoot={true}
                onUpdateOperator={handleUpdateGroupOperator}
                onAddRule={handleAddRule}
                onAddGroup={handleAddGroup}
                onUpdateRule={handleUpdateRule}
                onDeleteNode={handleDeleteNode}
            />
            <div className="condition-builder__json-preview">
                <h2 className="condition-builder__json-header">Condition Preview</h2>
                <pre className="condition-builder__json-content">
                    {JSON.stringify(rootGroup, null, 2)}
                </pre>
            </div>
        </>
    );
};

export default ConditionBuilder