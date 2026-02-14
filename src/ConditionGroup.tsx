import React from 'react'
import type { GroupNode, RuleNode } from './types';
import Rule from './Rule';

const ConditionGroup: React.FC<{
    group: GroupNode;
    isRoot: boolean;
    onUpdateOperator: (groupId: string, operator: 'AND' | 'OR') => void;
    onAddRule: (groupId: string) => void;
    onAddGroup: (groupId: string) => void;
    onUpdateRule: (ruleId: string, updates: Partial<RuleNode>) => void;
    onDeleteNode: (nodeId: string) => void;
}> = ({
    group,
    isRoot,
    onUpdateOperator,
    onAddRule,
    onAddGroup,
    onUpdateRule,
    onDeleteNode
}) => {
        return (
            <div className='condition-builder__group' style={{ marginLeft: isRoot ? 0 : 24 }}>
                <div className="condition-builder__group-header">
                    <div>
                        <span className="condition-builder__group-label">Group Operator:</span>
                        <select
                            value={group.operator}
                            onChange={e => onUpdateOperator(group.id, e.target.value as 'AND' | 'OR')}
                            className="condition-builder__group-operator-select"
                        >
                            <option value="AND">AND</option>
                            <option value="OR">OR</option>
                        </select>
                    </div>

                    <div className="condition-builder__group-actions">
                        <button onClick={() => onAddRule(group.id)} className="condition-builder__btn-add">
                            + Add Rule
                        </button>
                        <button onClick={() => onAddGroup(group.id)} className="condition-builder__btn-add">
                            + Add Group
                        </button>
                        {!isRoot && (
                            <button
                                onClick={() => onDeleteNode(group.id)}
                                className="condition-builder__btn-delete-group"
                            >
                                Delete Group
                            </button>
                        )}
                    </div>
                </div>
                <div className="condition-builder__group-children">
                    {group.children.length === 0 ? (
                        <div className="condition-builder__group-empty">Empty group (add rules or groups)</div>
                    ) : (
                        group.children.map(child => (
                            <React.Fragment key={child.id}>
                                {child.type === 'rule' ? (
                                    <Rule
                                        rule={child}
                                        onUpdate={updates => onUpdateRule(child.id, updates)}
                                        onDelete={() => onDeleteNode(child.id)}
                                    />
                                ) : (
                                    <ConditionGroup
                                        group={child}
                                        isRoot={false}
                                        onUpdateOperator={onUpdateOperator}
                                        onAddRule={onAddRule}
                                        onAddGroup={onAddGroup}
                                        onUpdateRule={onUpdateRule}
                                        onDeleteNode={onDeleteNode}
                                    />
                                )}
                            </React.Fragment>
                        ))
                    )}
                </div>

            </div>
        );
    };

export default ConditionGroup