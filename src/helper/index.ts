import type { ConditionNode, GroupNode, RuleNode } from "../types";

export const updateRuleInTree = (
    group: GroupNode,
    ruleId: string,
    updates: Partial<RuleNode>
): GroupNode => {
    const newChildren = group.children.map(child => {
        if (child.type === 'rule' && child.id === ruleId) {
            return { ...child, ...updates };
        }
        if (child.type === 'group') {
            return updateRuleInTree(child, ruleId, updates);
        }
        return child;
    });
    return { ...group, children: newChildren };
};

export const updateGroupOperatorInTree = (
    group: GroupNode,
    groupId: string,
    operator: 'AND' | 'OR'
): GroupNode => {
    if (group.id === groupId) {
        return { ...group, operator };
    }
    const newChildren = group.children.map(child =>
        child.type === 'group'
            ? updateGroupOperatorInTree(child, groupId, operator)
            : child
    );
    return { ...group, children: newChildren };
};

export const addNodeToGroupInTree = (
    group: GroupNode,
    groupId: string,
    newNode: ConditionNode
): GroupNode => {
    if (group.id === groupId) {
        return { ...group, children: [...group.children, newNode] };
    }
    const newChildren = group.children.map(child =>
        child.type === 'group'
            ? addNodeToGroupInTree(child, groupId, newNode)
            : child
    );
    return { ...group, children: newChildren };
};

export const deleteNodeFromTree = (
    group: GroupNode,
    nodeId: string
): GroupNode => {
    const newChildren = group.children
        .filter(child => child.id !== nodeId)
        .map(child =>
            child.type === 'group' ? deleteNodeFromTree(child, nodeId) : child
        );
    return { ...group, children: newChildren };
};