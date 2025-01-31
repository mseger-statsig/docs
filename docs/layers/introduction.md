---
title: Introduction
sidebar_label: Introduction
slug: /layers
---

# What are Layers?
Layers (a.k.a. Universes) allow us to create experiments that are mutually exclusive to each other. That is to say, users that are in one experiment of a layer, cannot also be in another experiment in the same layer.

In addition to that, **Layers are key to improving engineering efficiency and iteration velocity** for product teams. In a Layer, parameters exist at the Layer level, and can be shared across experiments within the Layer. Due to this characteristic, we can abstract the concept of "Experiment" away from the SDKs so that users only need to deal with parameters in code, which makes it super easy to run multiple experiments that change the same thing and iterate on the same experiment without any code changes.

Let's say your product has an important sign up dialog, which contains some text that your team runs a lot of tests on, some of which were ran in parallel, and some were iterations of previous experiments. If you work with Experiments directly, your code will look like this over time:

```jsx
let signUpText = DEFAULT_SIGNUP_TEXT;
const signUpTestV1 = statsig.getExperiment('sign_up_dialog_text_test_v1');
const signUpTestV2 = statsig.getExperiment('sign_up_dialog_text_test_v2');
const specialSignUpTest = statsig.getExperiment('sign_up_test_special_offer');
const holidaySignUpTest = statsig.getExperiment('sign_up_test_holiday');

if (signUpTestV1.get('is_in_test', false)) {
    // original test, added in app version v1.2
    signUpText = signUpTestV1.get('dialog_content', DEFAULT_SIGNUP_TEXT);
} else if (signUpTestV2.get('is_in_test', false)) {
    // v2 of the original test, added in app version v1.6 because we wanted to test a new copy but don't want to stop v1
    signUpText = signUpTestV2.get('dialog_content', DEFAULT_SIGNUP_TEXT);
} else if (specialSignUpTest.get('is_in_test', false)) {
    // test showing a special offer in the text, added in v2.0
    signUpText = specialSignUpTest.get('dialog_content', DEFAULT_SIGNUP_TEXT);
} else if (holidaySignUpTest.get('is_in_test', false)) {
    // test showing some holiday greetings in the dialog, added in v2.1
    signUpText = holidaySignUpTest.get('dialog_content', DEFAULT_SIGNUP_TEXT);
}

// Then we display the text in the dialog
```

Every time you add a new test, you need to change the code and it's only available in a new version.


However, things become **A LOT** easier if you work with Layers:


```jsx
let signUpText = statsig.getLayer('sign_up_tests').get('sign_up_dialog_text', DEFAULT_SIGNUP_TEXT);

// Then we display the text in the dialog
```

That's all the code you ever need! No more code changes and app releases for new tests. Every time you want to add a new test, simply add a new experiment to the same Layer and choose the parameter `sign_up_dialog_text` as a parameter for the new experiment. The SDK takes care of figuring out which value to serve for the user, based on which experiment the user is allocated to.

# See it in Action

To learn about all that you can do with Layers with an E2E example, see the Statsig tutorial [on Layers in JS](/layers/js-tutorial).
