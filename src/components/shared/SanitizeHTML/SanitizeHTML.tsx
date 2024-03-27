import { HTMLAttributes, createElement } from "react";
import sanitize from 'sanitize-html'


export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong']
    });

    return createElement(
        tag,
        { ...rest },
        sanitizedHTML
    )
};