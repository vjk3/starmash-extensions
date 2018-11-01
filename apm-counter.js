(() => {
	document.body.insertAdjacentHTML('beforeend', `<div style="position: absolute;/* background: black; */; top:15px;left:50%;margin-left: 90px;display: flex;"><span style="display: inline-block; background-color: rgba(0,0,0,0.5); border-radius: 3px;">
			<div class="icon"><img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InBhbkljb25UaXRsZSBwYW5JY29uRGVzYyIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiNGRkYiPiA8dGl0bGUgaWQ9InBhbkljb25UaXRsZSI+UGFuPC90aXRsZT4gPGRlc2MgaWQ9InBhbkljb25EZXNjIj5JY29uIG9mIGEgaGFuZCB1c3VhbGx5IHJlZmZlcmluZyB0byBhIGN1cnNvciB1c2VkIHRvIGRyYWcvbW92ZSBpdGVtcyBpbiB1bnNlciBpbnRlcmZhY2VzPC9kZXNjPiA8cGF0aCBkPSJNMjAsMTQgTDIwLDE3IEMyMCwxOS4yMDkxMzkgMTguMjA5MTM5LDIxIDE2LDIxIEwxMC4wMjE2NTk0LDIxIEM4Ljc1MDQ1NDk3LDIxIDcuNTU0OTMzOTIsMjAuMzk1NzY1OSA2LjgwMTAzMTI4LDE5LjM3MjI0NjcgTDMuMzQ1NDE2NjgsMTQuNjgwODA4MSBDMi44MTUwODQxNiwxMy45NjA4MTM5IDIuOTQ3Nzc5ODIsMTIuOTUwNTQ4IDMuNjQ2MDU0NzksMTIuMzkxOTI4IEM0LjM1NzU2MDQxLDExLjgyMjcyMzUgNS4zODMzNTgxMywxMS44Nzk4NzkyIDYuMDI3MjI1NzEsMTIuNTI0NjAyOCBMOCwxNC41IEw4LDEzIEw4LjAwMzkzMDgxLDEzIEw4LDExIEw4LjAxNzQ1MjMsNi41IEM4LjAxNzQ1MjMsNS42NzE1NzI4OCA4LjY4OTAyNTE3LDUgOS41MTc0NTIzLDUgQzEwLjM0NTg3OTQsNSAxMS4wMTc0NTIzLDUuNjcxNTcyODggMTEuMDE3NDUyMyw2LjUgTDExLjAxNzQ1MjMsMTEgTDExLjAxNzQ1MjMsNC41IEMxMS4wMTc0NTIzLDMuNjcxNTcyODggMTEuNjg5MDI1MiwzIDEyLjUxNzQ1MjMsMyBDMTMuMzQ1ODc5NCwzIDE0LjAxNzQ1MjMsMy42NzE1NzI4OCAxNC4wMTc0NTIzLDQuNSBMMTQuMDE3NDUyMywxMSBMMTQuMDE3NDUyMyw1LjUgQzE0LjAxNzQ1MjMsNC42NzE1NzI4OCAxNC42ODkwMjUyLDQgMTUuNTE3NDUyMyw0IEMxNi4zNDU4Nzk0LDQgMTcuMDE3NDUyMyw0LjY3MTU3Mjg4IDE3LjAxNzQ1MjMsNS41IEwxNy4wMTc0NTIzLDExIEwxNy4wMTc0NTIzLDcuNSBDMTcuMDE3NDUyMyw2LjY3MTU3Mjg4IDE3LjY4OTAyNTIsNiAxOC41MTc0NTIzLDYgQzE5LjM0NTg3OTQsNiAyMC4wMTc0NTIzLDYuNjcxNTcyODggMjAuMDE3NDUyMyw3LjUgTDIwLjAwNTg5NjIsMTQgTDIwLDE0IFoiLz4gPC9zdmc+" width="16" height="16"></div>
		</span><span id="apmStats" style="color: #FFF;padding-left: 10px; font-size: 13px;"></span><span style="color: #FFF; font-size: 10px;padding-left: 3px; position: relative; top: 3px;">APM</span></div>`)
	apmDOM = document.querySelectorAll('#apmStats')[0]
	apm = 0
	prev_apm = 0
	actionKeys = 'KeyWKeyAKeySKeyDShift'
	document.onkeyup = e => {
		let k = e.code
		if(k.indexOf('Arrow') !== -1 || actionKeys.indexOf(k) !== -1 || k.indexOf('Shift') !== -1) { apm++ }
	}
	calcAPM = () => { apmDOM.innerText = (apm - prev_apm)*60; prev_apm = apm; }
	setInterval(calcAPM, 1000)

	SWAM.registerExtension ({
		name: 'APM (Actions-per-Minute) counter',
		id: 'yutru.apm-counter',
		description: 'Shows your actions-per-minute count, updated every second. Does not track mouse events, only keypress. Finds actions-per-second and multiples by 60 to get per-minute values so your actual APM will be different.',
		version: '1.0.0',
		author: 'yutru'
	})
}())