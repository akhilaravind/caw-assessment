import React from "react";
import type { Field, Operator, RuleNode } from "./types";

const Rule: React.FC<{
    rule: RuleNode;
    onUpdate: (updates: Partial<RuleNode>) => void;
    onDelete: () => void;
}> = ({ rule, onUpdate, onDelete }) => {
    const isInvalid = rule.value.trim() === '';

    return (
        <div className="condition-builder__rule">
            <select
                value={rule.field}
                onChange={e => onUpdate({ field: e.target.value as Field })}
                className="condition-builder__rule-select"
            >
                <option value="Price">Price</option>
                <option value="Category">Category</option>
                <option value="Rating">Rating</option>
            </select>

            <select
                value={rule.operator}
                onChange={e => onUpdate({ operator: e.target.value as Operator })}
                className="condition-builder__rule-select"
            >
                {(['>', '<', '=', '!=', '>=', '<=', 'contains'] as Operator[]).map(op => (
                    <option key={op} value={op}>{op}</option>
                ))}
            </select>
            <div
                className={`condition-builder__rule-input-wrapper
                        ${isInvalid ? 'condition-builder__rule-input-wrapper--invalid' : ''}
                        `}
                >
                <input
                    type="text"
                    value={rule.value}
                    onChange={e => onUpdate({ value: e.target.value })}
                    placeholder="Value"
                    className="condition-builder__rule-input"
                />
                {isInvalid && (
                    <span className="condition-builder__rule-error">Value is required</span>
                )}
            </div>

            <button onClick={onDelete} className="condition-builder__btn-delete-rule">
                Delete Rule 
            </button>

        </div>
    );
};

export default Rule