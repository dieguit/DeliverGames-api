PizzaBoy
========


**Version:** 

### /gift/{id}
---
##### ***GET***
**Summary:** Get gift

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [gift](#gift) |

##### ***PUT***
**Summary:** Update gift

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| body | body |  | No | [gift](#gift) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [gift](#gift) |

##### ***DELETE***
**Summary:** Delete gift

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 |  |

### /gift
---
##### ***GET***
**Summary:** List gifts

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [ [gift](#gift) ] |

##### ***POST***
**Summary:** Create gift

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [gift](#gift) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 |  | [gift](#gift) |

### /gift/redeem
---
##### ***POST***
**Summary:** Redeem gift

**Description:** Send the user code and gift code.
- User code will come from Google Play user id.
- Gift code will be unique and allow to get a specific gift.

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | object |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [item](#item) |
| 404 |  | object |
| 500 |  | object |

### /item/{id}
---
##### ***GET***
**Summary:** Get item

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [item](#item) |

##### ***PUT***
**Summary:** Update item

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| body | body |  | No | [item](#item) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [item](#item) |

##### ***DELETE***
**Summary:** Delete item

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 |  |

### /item
---
##### ***GET***
**Summary:** List items

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | [ [item](#item) ] |

##### ***POST***
**Summary:** Create item

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [item](#item) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 |  | [item](#item) |

### Models
---

<a name="item"></a>**item**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | Yes |
| code | string |  | Yes |

<a name="gift"></a>**gift**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | Yes |
| item | [item](#item) |  | No |
| users | [ string ] |  | No |
| redeemed | date |  | No |
| expires | date |  | No |