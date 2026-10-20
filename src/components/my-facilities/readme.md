# my-facilities

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default     |
| ----------- | ----------- | ----------- | -------- | ----------- |
| `token_api` | `token_api` |             | `string` | `undefined` |


## Events

| Event        | Description | Type                    |
| ------------ | ----------- | ----------------------- |
| `stepChange` |             | `CustomEvent<StepData>` |


## Dependencies

### Used by

 - [my-modal](../my-modal)

### Depends on

- [my-loader](../my-loader)

### Graph
```mermaid
graph TD;
  my-facilities --> my-loader
  my-modal --> my-facilities
  style my-facilities fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
